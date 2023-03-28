import {readable} from "svelte/store";

let count = 0;
export let time = readable(count,(set)=>{
	let interval = setInterval(()=>{
		count+=1;
		set(count)
	},1000)
	return ()=>{
		clearInterval(interval)
	}

});

export let mousePos = readable({x:0,y:0},(set)=>{
	document.addEventListener("mousemove", move);
	function move(event){
		set({x:event.clientX,y:event.clientY,});
	}
	return ()=>{
		document.removeEventListener("mousemove", move);
	}
});
