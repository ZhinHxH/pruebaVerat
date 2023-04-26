public class game {
    
    public game() {
        comenzar_juego();
    }
    
	//System.debug(''); -> printing data
	//
	//Creamos tanto las posiciones de escaleras como las de las serpiente
	//Objects are ClassName VName = new ClassName()
	//Para asignar valores es con Vname.propierty = value
    
    public integer actualizar_p(integer dado, integer p){
        p = p + dado;
        return p;
    }
    
    public integer lzdado(){
        integer min = 1;
        integer max = 6;
		integer int_random = (integer)Math.floor(Math.random()*(max - min + 1) + min);        
        return int_random;
    }
    
    
    public void comenzar_juego(){
        integer p = 0;
        integer dado = 0;
        boolean winner = true;
        while (p <= 25){
            dado = lzdado();
            p = actualizar_p(dado, p);
            System.debug('Dado arroja: '+ dado);
            System.debug('Tu posición en el tablero es' + p);
            switch on p{
                when 3 {
                    p = p + 8;
                }
                when 6 {
                    p = p + 11;
                }
                when 9 {
                    p = p + 9;
                }
                when 10 {
                    p = p + 12;
                }
                when 14 {
                    p = p - 10;
                }
                when 19 {
                    p = p - 11;
                }
                when 22 {
                    p = p -2;
                }
                when 24 {
                    p = p - 8;
                }
            }
        }
    }
}