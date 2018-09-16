
// Will get item from state.content
export function getItem(items, id){
	let index = items.findIndex(item => item.id === id)
	return items[index]
}