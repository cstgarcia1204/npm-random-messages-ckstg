const messages = [
    'En eso consiste la amistad. Tú no sabes lo que necesita tu amigo, solo sabes que necesita algo',
    'Lo único que nos da miedo cuando nos asomamos a la muerte o a la oscuridad, es lo desconocido',
    'La fuerza de tus convicciones determina tu éxito, no el número de tus seguidores',
    'Lo que perdemos al final siempre vuelve a nosotros… aunque a veces no del modo que esperamos',
    'No es bueno habitar en tus sueños y olvidarse de vivir',
    'Los jóvenes no pueden saber cómo piensan ni cómo se sienten los ancianos, pero los ancianos somos culpables si olvidamos qué significa ser joven',
    'Trabajar duro es importante, pero hay algo que importa más: creer en ti mismo',
    'Después de todo, para una mente bien organizada, la muerte no es más que la siguiente gran aventura',
    'No son las habilidades lo que demuestra lo que somos, son nuestras decisiones',
    'Cada gran mago de la historia comenzó siendo no más de lo que nosotros somos ahora',
    'Claro que esto sucede en tu cabeza, Harry, pero ¿por qué eso tiene que significar que no es real?',
    'La felicidad se puede hallar hasta en los más oscuros momentos, si somos capaces de usar bien la luz'
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}
module.exports = { randomMsg }
