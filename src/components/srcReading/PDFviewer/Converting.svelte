<div id = 'contaiCoverting'>
    
<span class="loader"></span>
</div>

<style>
    #contaiCoverting{
        position: absolute;
    top: 5vh;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: auto;
    padding: 2vh;
    background-color: #fefefe;
    border-top: 0.1vh solid #eeeeee;
    display:flex;
    align-items: center;
    justify-content: center;
 
    }

 
    .loader {
 width:50%;
 aspect-ratio: 1/1;
  border: 5px solid #535353;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  animation: pulse 1s linear infinite;
}
.loader:after {
  content: '';
  position: absolute;
  width: 48px;
  height: 48px;
  border: 5px solid #535353;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  animation: scaleUp 1s linear infinite;
}

@keyframes scaleUp {
  0% { transform: translate(-50%, -50%) scale(0) }
  60% , 100% { transform: translate(-50%, -50%)  scale(1)}
}
@keyframes pulse {
  0% , 60% , 100%{ transform:  scale(1) }
  80% { transform:  scale(1.2)}
}
</style>