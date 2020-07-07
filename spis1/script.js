            var t_obraz = 'obraz/title.jpg'
            var t_obrazy = ['obraz/title.jpg','obraz/title_1.jpg','obraz/title_2.jpg','obraz/title_3.jpg','obraz/title_4.jpg','obraz/title_5.jpg','obraz/title_6.jpg'];     

            var v_pytanie_1 = false; //brak odpowiedzi na pytanie
            var v_pytanie_2 = false; //brak odpowiedzi na pytanie
            var v_pytanie_3 = false; //brak odpowiedzi na pytanie
            var v_pytanie_4 = false; //brak odpowiedzi na pytanie
            var v_pytanie_5 = false; //brak odpowiedzi na pytanie
            var v_pytanie_6 = false; //brak odpowiedzi na pytanie    
            
            function gratulacje(){
               if (v_pytanie_1=true && v_pytanie_2=true && v_pytanie_3=true && v_pytanie_4=true && v_pytanie_5=true && v_pytanie_6=true){
                   document.getElementById('tekst_eduk_x').style.display = 'block';                   
               } 
               else { 
                   document.getElementById('tekst_eduk_x').style.display = 'none';  
               }            
            }


            function zakryj_pytania(){ // i wiadomości edukacyjne
              document.getElementById('pyt1').style.display = 'none';                  
              document.getElementById('pyt2').style.display = 'none';                  
              document.getElementById('pyt3').style.display = 'none';                  
              document.getElementById('pyt4').style.display = 'none';                  
              document.getElementById('pyt5').style.display = 'none';                  
              document.getElementById('pyt6').style.display = 'none';         
              
              document.getElementById('tekst_eduk_1').style.display = 'none';  
              document.getElementById('tekst_eduk_2').style.display = 'none';         
              document.getElementById('tekst_eduk_3').style.display = 'none';         
              document.getElementById('tekst_eduk_4').style.display = 'none';         
              document.getElementById('tekst_eduk_5').style.display = 'none';         
              document.getElementById('tekst_eduk_6').style.display = 'none';         
              document.getElementById('tekst_eduk_x').style.display = 'none';                   
            }

            function f_click_obraz_1(){
              zakryj_pytania()  
              if (v_pytanie_1){
                  document.getElementById('i_obraz_1').src = t_obraz; // zakrycie obrazka  
                  document.getElementById('pyt1').style.display = 'none';//zakrycie pytania                  
                  v_pytanie_1 = false;  // zmiana na brak odpowiedzi lub odpowiedź nieprawidłowa   
               }
             else { 
                 document.getElementById('pyt1').style.display = 'block';                   
                  }
             }

            function f_click_obraz_2(){
              zakryj_pytania()
              if (v_pytanie_2){
                  document.getElementById('i_obraz_2').src = t_obraz; // zakrycie obrazka  
                  document.getElementById('pyt2').style.display = 'none';//zakrycie pytania                  
                  v_pytanie_2 = false;  // zmiana na brak odpowiedzi lub odpowiedź nieprawidłowa   
               }
             else { 
                 document.getElementById('pyt2').style.display = 'block';                       
                  }
             }    

            function f_click_obraz_3(){
              zakryj_pytania()  
              if (v_pytanie_3){
                  document.getElementById('i_obraz_3').src = t_obraz; // zakrycie obrazka  
                  document.getElementById('pyt3').style.display = 'none';//zakrycie pytania                  
                  v_pytanie_3 = false;  // zmiana na brak odpowiedzi lub odpowiedź nieprawidłowa   
               }
             else { 
                 document.getElementById('pyt3').style.display = 'block';                      
                  }
             }

            function f_click_obraz_4(){
                zakryj_pytania()  
                if (v_pytanie_4){
                    document.getElementById('i_obraz_4').src = t_obraz; // zakrycie obrazka  
                    document.getElementById('pyt4').style.display = 'none';//zakrycie pytania                  
                    v_pytanie_4 = false;  // zmiana na brak odpowiedzi lub odpowiedź nieprawidłowa   
               }
             else { 
                 document.getElementById('pyt4').style.display = 'block';                       
                  }
             }

            function f_click_obraz_5(){
                zakryj_pytania()
                if (v_pytanie_5){
                   document.getElementById('i_obraz_5').src = t_obraz; // zakrycie obrazka  
                   document.getElementById('pyt5').style.display = 'none';//zakrycie pytania                  
                   v_pytanie_5 = false;  // zmiana na brak odpowiedzi lub odpowiedź nieprawidłowa   
                }
                else { 
                   document.getElementById('pyt5').style.display = 'block';       
                }
             }

            function f_click_obraz_6(){
              zakryj_pytania()
              if (v_pytanie_6){
                  document.getElementById('i_obraz_6').src = t_obraz; // zakrycie obrazka  
                  document.getElementById('pyt6').style.display = 'none';//zakrycie pytania                  
                  v_pytanie_6 = false;  // zmiana na brak odpowiedzi lub odpowiedź nieprawidłowa   
               }
             else { 
                 document.getElementById('pyt6').style.display = 'block';       
                  }
             }
             

            function spr_odp_1(){
                var pytanie = document.getElementsByName("pyt1");                
                if (pytanie[0].checked == true && pytanie[1].checked == true && pytanie[2].checked == true) {
                    alert("Odpowiedź w pełni prawidłowa");
                    v_pytanie_1 = true;  // odpowiedź prawidłowa    
                    document.getElementById('i_obraz_1').src = t_obrazy[1]; // odkrycie obrazka
                    document.getElementById('pyt1').style.display = 'none';//zakrycie pytania
                    document.getElementById('tekst_eduk_0').style.display = 'none';         
                    document.getElementById('tekst_eduk_1').style.display = 'block'; 
                    gratulacje();                
                }                 
                  else {
                      alert("Nieprawidłowa odpowiedź lub niewpełni prawidłowa odpowiedź");
                      document.getElementById('pyt1').style.display = 'none';//zakrycie pytania
                  }
            }

            function spr_odp_2(){
                var pytanie = document.getElementsByName("pyt2");                
                if (pytanie[0].checked == true) {
                    alert("Odpowiedź prawidłowa");
                    v_pytanie_2 = true;  // odpowiedź prawidłowa    
                    document.getElementById('i_obraz_2').src = t_obrazy[2]; // odkrycie obrazka
                    document.getElementById('pyt2').style.display = 'none';//zakrycie pytania
                    document.getElementById('tekst_eduk_0').style.display = 'none';         
                    document.getElementById('tekst_eduk_2').style.display = 'block'; 
                    gratulacje();                
                }                 
                  else {
                      alert("Nieprawidłowa odpowiedź");
                      document.getElementById('pyt2').style.display = 'none';//zakrycie pytania
                  }
            }

            function spr_odp_3(){
                var pytanie = document.getElementsByName("pyt3");                
                if (pytanie[0].checked == true && pytanie[1].checked == true && pytanie[2].checked == true) {
                    alert("Odpowiedź w pełni prawidłowa");
                    v_pytanie_3 = true;  // odpowiedź prawidłowa    
                    document.getElementById('i_obraz_3').src = t_obrazy[3]; // odkrycie obrazka
                    document.getElementById('pyt3').style.display = 'none';//zakrycie pytania
                    document.getElementById('tekst_eduk_0').style.display = 'none';         
                    document.getElementById('tekst_eduk_3').style.display = 'block'; 
                    gratulacje();                
                }                 
                  else {
                      alert("Nieprawidłowa odpowiedź lub niewpełni prawidłowa odpowiedź");
                      document.getElementById('pyt3').style.display = 'none';//zakrycie pytania
                  }
            }

            function spr_odp_4(){
                var pytanie = document.getElementsByName("pyt4");                
                if (pytanie[1].checked == true) {
                    alert("Odpowiedź prawidłowa");
                    v_pytanie_4 = true;  // odpowiedź prawidłowa    
                    document.getElementById('i_obraz_4').src = t_obrazy[4]; // odkrycie obrazka
                    document.getElementById('pyt4').style.display = 'none';//zakrycie pytania
                    document.getElementById('tekst_eduk_0').style.display = 'none';         
                    document.getElementById('tekst_eduk_4').style.display = 'block'; 
                    gratulacje();                
                }                 
                   else {
                      alert("Nieprawidłowa odpowiedź");
                      document.getElementById('pyt4').style.display = 'none';//zakrycie pytania
                  }
            }

            function spr_odp_5(){
                var pytanie = document.getElementsByName("pyt5");                
                if (pytanie[0].checked == true) {
                    alert("Odpowiedź prawidłowa");
                    v_pytanie_5 = true;  // odpowiedź prawidłowa    
                    document.getElementById('i_obraz_5').src = t_obrazy[5]; // odkrycie obrazka
                    document.getElementById('pyt5').style.display = 'none';//zakrycie pytania
                    document.getElementById('tekst_eduk_0').style.display = 'none'; 
                    document.getElementById('tekst_eduk_5').style.display = 'block'; 
                    gratulacje();                
                }                 
                  else {
                      alert("Nieprawidłowa odpowiedź");
                      document.getElementById('pyt5').style.display = 'none';//zakrycie pytania
                  }
            }

            function spr_odp_6(){
                var pytanie = document.getElementsByName("pyt6");                
                if (pytanie[0].checked == true) {
                    alert("Odpowiedź prawidłowa");
                    v_pytanie_6 = true;  // odpowiedź prawidłowa    
                    document.getElementById('i_obraz_6').src = t_obrazy[6]; // odkrycie obrazka
                    document.getElementById('pyt6').style.display = 'none';//zakrycie pytania
                    document.getElementById('tekst_eduk_0').style.display = 'none';         
                    document.getElementById('tekst_eduk_6').style.display = 'block'; 
                    gratulacje();                
                }                 
                  else {
                      alert("Nieprawidłowa odpowiedź");
                      document.getElementById('pyt6').style.display = 'none';//zakrycie pytania
                  }
            }
