import Arweave from "@irys/arweave";
const arweave = new Arweave();

export const getBlock = async (height) => {
	const timestamp = (await arweave.blocks.getByHeight(height)).timestamp;
	if (typeof timestamp === "number" && isFinite(timestamp) && !isNaN(timestamp) && timestamp > 0)
		return timestamp * 1000;
	throw new Error(`Illegal block timestamp: ${timestamp}`);
};

export async function getBlockHeightFromTime(time: number, aimFor?: "before" | "after"): Promise<number> {
	const currentHeight = (await arweave.network.getInfo()).height;
	const avgBlockTime = 2 * 60 * 1000;
	const estimateHeightDelta = Math.ceil((Date.now() - time) / avgBlockTime);
	const estimateHeight = currentHeight - estimateHeightDelta;
	// get blocks from around the estimate
	const height = estimateHeight;

	let wobble = 0;
	let closestDelta = Infinity;
	let closestHeight = 0;
	let twoClosest = 0; // below will flip flop between two values at mimima

	for (let i = 0; i < 30; i++) {
		const testHeight = height + wobble;
		const timestamp = await getBlock(testHeight);
		const cDelta = timestamp - time;
		console.log(`Delta: ${cDelta / 1000}s, height: ${testHeight}, Date: ${new Date(timestamp)}`);
		if (cDelta === twoClosest) break;
		if (i % 2 === 0) twoClosest = cDelta;
		if (Math.abs(cDelta) > 20 * 60 * 1000) {
			wobble += Math.floor((cDelta / avgBlockTime) * 0.75) * -1;
		} else {
			wobble += cDelta > 0 ? -1 : 1;
		}
		if (Math.abs(cDelta) < Math.abs(closestDelta)) {
			closestDelta = cDelta;
			closestHeight = testHeight;
		}
	}

	// before will have -ve delta, after will have +ve delta
	if (aimFor === "before") {
		if (closestDelta > 0) {
			closestHeight -= 1;
		}
	} else if (aimFor === "after") {
		if (closestDelta < 0) {
			closestHeight += 1;
		}
	}
	return closestHeight;
}
