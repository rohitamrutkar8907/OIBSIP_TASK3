const calculateTemp = () =>{
    const numberTemp = document.getElementById('temp').value;
    const tempSelect = document.getElementById('tempdiff');
    const valuetemp = tempdiff.options[tempSelect.selectedIndex].value;
    const celTofah = (cel) =>{
        let Fahrenheit = Math.round((cel * 9/5) +32) ;
        return  Fahrenheit ;
    }
    const fahTocel = (fah) =>{
        let Celsius = Math.round((fah -32 ) * 5/9) ;
        return  Celsius ;
    }
    let result;
    if(valuetemp == 'cel'){
        result = celTofah(numberTemp);
        document.getElementById('result_container').innerHTML = ` = ${result} °Fahrenheit`;
    }
    else{
        result = fahTocel(numberTemp);
        document.getElementById('result_container').innerHTML = ` = ${result} °Celsius`;
    }
}