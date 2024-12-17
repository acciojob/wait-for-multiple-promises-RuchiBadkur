//your JS code here. If required.

const now = Date.now();

const output = document.getElementById("output");
output.innerHTML = `
	<tr id="loading"><td colspan="2">Loading...</td></tr>
`

const myPromise1 = new Promise ((res, rej)=>{
	setTimeout(() => {
		
		res(Math.round((Date.now() - now)/1000))
	}, 2000)
})

const myPromise2 = new Promise ((res, rej)=>{
	setTimeout(() => {
		res(Math.round((Date.now() - now)/1000))
	}, 1000)
})

const myPromise3 = new Promise ((res, rej)=>{
	setTimeout(() => {
		res(Math.round((Date.now() - now)/1000))
	}, 3000)
})


Promise.all([myPromise1, myPromise2, myPromise3]).then(([p1, p2, p3]) => {
	output.innerHTML = ``
	output.innerHTML = `
		<tr>
			<td>Promise 1</td>
			<td>${p1}</td>
		</tr>
		<tr>
			<td>Promise 2</td>
			<td>${p2} </td>
		</tr>
		<tr>
			<td>Promise 3</td>
			<td>${p3}</td>
		</tr>
		<tr>
			<td>Total</td>
			<td>${(Date.now() - now)/1000)}</td>
		</tr>
	`
})
.catch((err) => {
	output.innerHTML = `
		
			<td>${err}</td>
		
	`
})



