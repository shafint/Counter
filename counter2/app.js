const counted=document.querySelectorAll(".counterd");
counted.forEach((value)=>{
    value.innerHTML=0;
    const mainOparations=()=>{
        const AttributeGet=value.getAttribute('data-target');
        const countingStart=Math.round(AttributeGet/100);
        const maininnerhtml=Number(value.innerHTML);
        if(maininnerhtml<AttributeGet){
            value.innerHTML=Math.floor(maininnerhtml+countingStart);
            setTimeout(mainOparations,10);
        }else{
            value.innerHTML=AttributeGet;
        }
    }
    mainOparations();
})