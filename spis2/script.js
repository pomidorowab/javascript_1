            var t_obraz = 'obraz/title.jpg'                        
            var t_obrazy = ['obraz/title.jpg','obraz/title_1.png','obraz/title_2.png','obraz/title_3.png','obraz/title_4.png','obraz/title_5.png','obraz/title_6.png','obraz/title_7.png','obraz/title_8.png'];     

            var v_pytanie_1 = false; //brak odpowiedzi na pytanie
            var v_pytanie_2 = false; //brak odpowiedzi na pytanie
            var v_pytanie_3 = false; //brak odpowiedzi na pytanie
            var v_pytanie_4 = false; //brak odpowiedzi na pytanie
            var v_pytanie_5 = false; //brak odpowiedzi na pytanie
            var v_pytanie_6 = false; //brak odpowiedzi na pytanie     
            var v_pytanie_7 = false; //brak odpowiedzi na pytanie     
            var v_pytanie_8 = false; //brak odpowiedzi na pytanie     


            function zakryj_pytania(){ // i wiadomości edukacyjne
              document.getElementById('pyt1').style.display = 'none';                  
              document.getElementById('pyt2').style.display = 'none';                  
              document.getElementById('pyt3').style.display = 'none';                  
              document.getElementById('pyt4').style.display = 'none';                  
              document.getElementById('pyt5').style.display = 'none';                  
              document.getElementById('pyt6').style.display = 'none'; 
              document.getElementById('pyt7').style.display = 'none'; 
              document.getElementById('pyt8').style.display = 'none'; 
            }
            
            function zakryj_tekst_eduk(){ // i wiadomości edukacyjne
              document.getElementById('tekst_eduk_0').style.display = 'none';  
              document.getElementById('tekst_eduk_1').style.display = 'none';  
              document.getElementById('tekst_eduk_2').style.display = 'none';
              document.getElementById('tekst_eduk_3').style.display = 'none';                   
              document.getElementById('tekst_eduk_4').style.display = 'none';         
              document.getElementById('tekst_eduk_5').style.display = 'none';         
              document.getElementById('tekst_eduk_6').style.display = 'none';                
              document.getElementById('tekst_eduk_7').style.display = 'none';                
              document.getElementById('tekst_eduk_8').style.display = 'none';                
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

            function f_click_obraz_7(){
              zakryj_pytania()
              if (v_pytanie_7){
                  document.getElementById('i_obraz_7').src = t_obraz; // zakrycie obrazka  
                  document.getElementById('pyt7').style.display = 'none';//zakrycie pytania                  
                  v_pytanie_7 = false;  // zmiana na brak odpowiedzi lub odpowiedź nieprawidłowa   
               }
             else { 
                 document.getElementById('pyt7').style.display = 'block';       
                  }
             }

            function f_click_obraz_8(){
              zakryj_pytania()
              if (v_pytanie_8){
                  document.getElementById('i_obraz_8').src = t_obraz; // zakrycie obrazka  
                  document.getElementById('pyt8').style.display = 'none';//zakrycie pytania                  
                  v_pytanie_8 = false;  // zmiana na brak odpowiedzi lub odpowiedź nieprawidłowa   
               }
             else { 
                 document.getElementById('pyt8').style.display = 'block';       
                  }
             }



            function spr_odp_1(){
                var pytanie = document.getElementsByName("pyt1");                
                if (pytanie[0].checked == true && pytanie[1].checked == true && pytanie[2].checked == true) {
                    alert("Odpowiedź w pełni prawidłowa");
                    v_pytanie_1 = true;  // odpowiedź prawidłowa    
                    document.getElementById('i_obraz_1').src = t_obrazy[1]; // odkrycie obrazka
                    document.getElementById('pyt1').style.display = 'none';//zakrycie pytania
                    zakryj_tekst_eduk()         
                    document.getElementById('tekst_eduk_1').style.display = 'block'; 
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
                    zakryj_tekst_eduk()
                    document.getElementById('tekst_eduk_2').style.display = 'block'; 
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
                    zakryj_tekst_eduk()
                    document.getElementById('tekst_eduk_3').style.display = 'block'; 
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
                    zakryj_tekst_eduk()
                    document.getElementById('tekst_eduk_4').style.display = 'block'; 
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
                    zakryj_tekst_eduk()
                    document.getElementById('tekst_eduk_5').style.display = 'block'; 
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
                    zakryj_tekst_eduk()
                    document.getElementById('tekst_eduk_6').style.display = 'block'; 
                }                 
                  else {
                      alert("Nieprawidłowa odpowiedź");
                      document.getElementById('pyt6').style.display = 'none';//zakrycie pytania
                  }
            }

            function spr_odp_7(){
                var pytanie = document.getElementsByName("pyt7");                
                if (pytanie[0].checked == true && pytanie[1].checked == true && pytanie[2].checked == true) {
                    alert("Odpowiedź w pełni prawidłowa");
                    v_pytanie_7 = true;  // odpowiedź prawidłowa    
                    document.getElementById('i_obraz_7').src = t_obrazy[7]; // odkrycie obrazka
                    document.getElementById('pyt7').style.display = 'none';//zakrycie pytania
                    zakryj_tekst_eduk()         
                    document.getElementById('tekst_eduk_7').style.display = 'block'; 
                }                 
                  else {
                      alert("Nieprawidłowa odpowiedź lub niewpełni prawidłowa odpowiedź");
                      document.getElementById('pyt7').style.display = 'none';//zakrycie pytania
                  }
            }

            function spr_odp_8(){
                var pytanie = document.getElementsByName("pyt8");                
                if (pytanie[0].checked == true && pytanie[1].checked == true && pytanie[2].checked == true) {
                    alert("Odpowiedź w pełni prawidłowa");
                    v_pytanie_8 = true;  // odpowiedź prawidłowa    
                    document.getElementById('i_obraz_8').src = t_obrazy[8]; // odkrycie obrazka
                    document.getElementById('pyt8').style.display = 'none';//zakrycie pytania
                    zakryj_tekst_eduk()         
                    document.getElementById('tekst_eduk_8').style.display = 'block'; 
                }                 
                  else {
                      alert("Nieprawidłowa odpowiedź lub niewpełni prawidłowa odpowiedź");
                      document.getElementById('pyt8').style.display = 'none';//zakrycie pytania
                  }
            }

