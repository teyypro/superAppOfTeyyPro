<script defer>

	import {choseText,coordinateMouse,selectedText, selectedTextForQuickTaskPDF} from '../store.js'
function Run(){
const iframe = document.getElementById('PDFviewer');
const iframeWindow = iframe.contentWindow.document;

  // iframeWindow.getElementById("PDFviewer")
  // The iframe has finished loading, so you can now access its contentWindow property
  iframeWindow.getElementById('viewerContainer').addEventListener('mouseup',Systematize)
   iframeWindow.getElementById('viewerContainer').addEventListener('mousedown',Delte)
let prevText =''
let text = ''
  
	function Systematize(event){
        console.log("bug here")
         prevText = text
	text = iframeWindow.getSelection().toString()
        
        //SỬ LÝ ĐẦU VÀO Ở ĐÂY
        if ((text!="") && (text!=prevText)){
            console.log(text)
           
            $choseText = text
            coordinateMouse.update(()=>{
                console.log(event.clientX, event.clientY)
                return [event.clientX, event.clientY]
            })
            
            console.log($coordinateMouse[0],$coordinateMouse[1])
            $selectedTextForQuickTaskPDF = true
            
        } else {
            $selectedTextForQuickTaskPDF = false 
          
        }
    }
 
	   function Delte(){
    $selectedTextForQuickTaskPDF = false
      $selectedText = ''
    }
}
	
  

  </script>


<main>

  <iframe src="/PDFviewer/web/viewer.html" title="nothing" id="PDFviewer" on:load={Run} ></iframe>
  
</main>
  

  
  <style>
	iframe {
	  position: absolute;
	  width: 100%;
	  height: 100%;
    border:0;
	}

  main{
    flex-grow: 1;
    position: relative;
  }
  </style>
  