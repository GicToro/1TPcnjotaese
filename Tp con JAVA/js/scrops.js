function  calcularTotal ( )  {
    var  cantEntradas ,
      total ,
      categoría ,
      entradaEstudiante ,
      entradaTrainee ,
      entradaJr ,
      generales ;
  
    console.log ( 'entra a la funcion' ) ;
    cantEntradas  =  documento.getElementById ( 'inputCantidad' ).value;
    categoria  =  documento.getElementById ( 'categoria de entrada' ).value ;
  
    console.log ('cant entradas'  +  cantEntradas  +  'categoria'  +  categoria );
  
    entradaEstudiante  =  200  -  ( 200  *  80 )  /  100 ;
    entradaAprendiz  =  200  -  ( 200  *  50 )  /  100 ;
    entradaJr  =  200  -  ( 200  *  15 )  /  100 ;
    generales  =  200 ;
  
    /*verifico si el valor ingresado es mayor a cero y si es un numero*/
    if  ( cantEntradas  >  0  &&  !isNaN ( cantEntradas )  &&  cantEntradas  %  1  ==  0 )  {
      //verifico el tipo de entrada que es (estudiante, trainee y jr para poder mostrar el monto)
      if  ( categoria  ==  'Estudiante' )  {
        total  =  entradaEstudiante  *  cantEntradas ;
        documento.getElementById ( 'importeTotal' ).innerHTML =
          `Total a Pagar: \u0024${total}` ;
      }  else  if  (categoria  ==  'Trainee')  {
        total  =  entradaAprendiz  *  cantEntradas ;
        documento.getElementById ( 'importeTotal' ).innerHTML  =
          `Total a Pagar: \u0024${total}` ;
      }  else  if  ( categoría  ==  'Junior' )  {
        total  =  entradaJr  *  cantEntradas ;
        documento.getElementById ( 'importeTotal' ).innerHTML =
          'Total a Pagar: \u0024'  +  total ;
      }  else  if  ( categoría  ==  'General' )  {
        total  =  general  *  cantEntradas ;
        documento.getElementById ( 'importeTotal' ).innerHTML  =
          'Total a Pagar: \u0024'  +  total ;
      }
    }  else  {
      window.alert ( 'Debe ingresar la cantidad de entradas en números enteros' ) ;
    }
  }
  
  function  borrar ( )  {
    documento.getElementById ( ' inputName ' ) . valor  =  ' ' ;
    documento.getElementById ( 'inputApellido' ) . valor  =  ' ' ;
    documento.getElementById ( 'inputEmail' ) . valor  =  ' ' ;
    documento.getElementById ( 'inputCantidad' ) . valor  =  ' ' ;
    documento.getElementById ( 'inputCategoria' ) . valor  =  'Estudiante' ;
    documento.getElementById ( 'importeTotal' ) . innerHTML  =  'Total a Pagar: \u0024' ;
  }