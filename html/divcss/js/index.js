function test(IDneirong,tabCount,index){
   for(var i=1;i<=tabCount;i++){
		    
		    var eledd = document.getElementById(IDneirong + i);
		       if(i==index){        
		            eledd.style.display = "block";
		      }else{     	
		            eledd.style.display = "none";
		      }
    }    
}



function TVchange(reboC,tabCount,index){
  for(var i=1;i<=tabCount;i++){
		
		    var ele = document.getElementById(reboC + i);
		       if(i==index){        
		            ele.style.display = "block";
		      }else{     	
		            ele.style.display = "none";
		      }
    }   
}


function help(flag){
     var ele = document.getElementById("HelpT");
     var elec = document.getElementById("HelpC");
     
      if(flag==15){
      	             ele.style.border = "1px solid #c7c7c7";
      	            
				     ele.style.borderBottom = "0px"
				     ele.style.borderTop = "0px"   
				     elec.style.display = "block";
				       }
     else{
	     	ele.style.border = "0px";	
	      
		    elec.style.display = "none";
     }
}


function ankan(kankan,kankancon,kkCount,index){
	for (i=1;i<=kkCount;i++) {
		var ele = document.getElementById(kankan + i);
	    var elec = document.getElementById(kankancon + i);
        if(i==index){
            elec.style.display = "block";
        }else{
        	elec.style.display = "none";
        }

	}
}



function showlight(){

	setInterval("light();",500);
}