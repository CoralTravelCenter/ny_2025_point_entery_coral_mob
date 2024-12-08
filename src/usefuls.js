export function appendOnce(parent, child) {
	if (!parent.contains(child)) {
		parent.append(child);
	}
}