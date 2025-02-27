const bRange=document.getElementById("bRange");
const bValue=document.getElementById("bValue");
bRange.addEventListener("input", () => {
    const brightness =bRange.value;
    document.body.style.background =`rgb(${brightness * 2.55}, ${brightness * 2.55}, ${brightness * 2.55})`;
    bValue.textContent = `${brightness}%`;
});
function resetBrightness(){
    bRange.value=50;
    document.body.style.background=`#808080`;
    bValue.textContent="50%";
}
