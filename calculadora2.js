const sumar = document.getElementById("sumar");
const restar = document.getElementById("restar");
const multiplicar = document.getElementById("multiplicar");
const dividir = document.getElementById("dividir");


sumar.addEventListener('click',
    async (event)=>{        
        event.preventDefault();
        const numero_1 = parseFloat(document.getElementById('numero1').value);
        const numero_2 = parseFloat(document.getElementById('numero2').value);
        const respuesta = await fetch('http://localhost:3000/sumar', 
        {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify({numero_1, numero_2})
        }); 
        const datos = await respuesta.json();
        mostrarDatos(datos);
    }
)
restar.addEventListener('click',
    async (event)=>{        
        event.preventDefault();
        const numero_1 = parseFloat(document.getElementById('numero1').value);
        const numero_2 = parseFloat(document.getElementById('numero2').value);
        const respuesta = await fetch('http://localhost:3000/restar', 
        {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify({numero_1, numero_2})
        }); 
        const datos = await respuesta.json();
        mostrarDatos(datos);
    }
)
multiplicar.addEventListener('click',
    async (event)=>{        
        event.preventDefault();
        const numero_1 = parseFloat(document.getElementById('numero1').value);
        const numero_2 = parseFloat(document.getElementById('numero2').value);
        const respuesta = await fetch('http://localhost:3000/multiplicar', 
        {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify({numero_1, numero_2})
        }); 
        const datos = await respuesta.json();
        mostrarDatos(datos);
    }
)
dividir.addEventListener('click',
    async (event)=>{        
        event.preventDefault();
        const numero_1 = parseFloat(document.getElementById('num1').value);
        const numero_2 = parseFloat(document.getElementById('num2').value);
        const respuesta = await fetch('http://localhost:3000/dividir', 
        {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify({numero_1, numero_2})
        }); 
        const datos = await respuesta.json();
        mostrarDatos(datos);
    }
)

