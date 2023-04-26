const pascuaDate = (año) => {
    //Se calcula el número de Oro
    let goldenNumber = (año % 19) + 1;
    //Se calcula el número del pacto Juliano
    let epacJ = (11 * (goldenNumber - 1)) % 30;
    //Procedemos a calcular con formulas especificas variables necesarias para el calculo del pacto
    // Y con la funcion Math.round se redondean los valores obtenidos
    let c = Math.round(año / 100);
    let s = Math.round((3 * c + 3) / 4);
    let l = Math.round((8 * c + 13) / 25);
    //Se obtiene el valor del pacto
    let pacto = epacJ - s + l + 8;
    console.log(pacto);
    //Retornamos el valor que irá como parametro a la funcion encargada de calcular la fecha
    return pacto;
  };
  
  const calculate = (pacto) => {
    let año = 2011;
    //Se ejecuta la función pascuaDate y se le entrega el año al que deseamos calcularle
    let num = pascuaDate(año);
    //En un arreglo colocamos los valores posibles que puede asumir el valor del pacto junto
    //Con las fechas que restas representan
    const epact = [`${año}-04-12`, `${año}-04-11`, `${año}-04-10`, `${año}-04-09`, `${año}-04-08`, `${año}-04-07`, `${año}-04-06`, `${año}-04-05`, `${año}-04-04`, `${año}-04-03`, `${año}-04-02`, `${año}-04-01`, `${año}-04-31`, `${año}-04-30`, `${año}-04-29`, `${año}-04-28`, `${año}-04-27`, `${año}-04-26`, `${año}-04-25`, `${año}-04-24`, `${año}-04-23`, `${año}-04-22`, `${año}-04-21`, `${año}-04-18`, `${año}-04-17`, `${año}-04-17`, `${año}-04-16`, `${año}-04-15`, `${año}-04-14`, `${año}-04-13`,];
    //Creamos un arreglo con los días de las semana para saber en que día estamos
    const dias = [
      "domingo",
      "lunes",
      "martes",
      "miércoles",
      "jueves",
      "viernes",
      "sábado",
    ];
    
    //El siguienye método me retorna el día de la semana en la que me encuentro al momento de consultar lo del pacto
    console.log(epact[num-1])
    date_epact = epact[num-1];
    const numeroDia = new Date(date_epact).getDay();
    const nombreDia = dias[numeroDia];
    var date = new Date(date_epact);
    console.log(date);
    //Dependiendo del dia de la semana que se encuentre se le suman los restantes
    if (numeroDia == 0){
      date.setDate(date.getDate()+7);
    }else if (numeroDia == 1){
      date.setDate(date.getDate()+6);
    }else if (numeroDia == 2){
      date.setDate(date.getDate()+5);
    }else if (numeroDia == 3){
      date.setDate(date.getDate()+4);
    }else if (numeroDia == 4){
      date.setDate(date.getDate()+3);
    }else if (numeroDia == 5){
      date.setDate(date.getDate()+2);
    }else if (numeroDia == 6){
      date.setDate(date.getDate()+1);
    }
    console.log(date);
    console.log("Nombre de día de la semana: ", nombreDia);
    return date;
  };
