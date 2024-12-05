const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;


xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		
        let resultado = JSON.parse(this.response)
        console.log(resultado)
	}
});
document.getElementById("añadir").addEventListener('click',function(){
     
     let n1 = document.getElementById("n1").value
     let n2 = document.getElementById("n2").value

        xhr.open('GET', 'https://love-calculator.p.rapidapi.com/getPercentage?sname=' + n1 + '&fname=' + n2);
        xhr.setRequestHeader('x-rapidapi-key', 'a2ffe67242msh96e00ec95f7e487p1803b5jsn722527b9db82');
        xhr.setRequestHeader('x-rapidapi-host', 'love-calculator.p.rapidapi.com');
        
        xhr.send(data);
          
})



