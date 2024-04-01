const firstTriangle = { width: 7.0, length: 3.5 };
const secondTriangle = { width: 4.3, length: 6.4 };
const thirdTriangle = { width: 5.5, length: 5.0 };

function triangleArea(width, length){
    return (width * length / 2)
}

console.log(triangleArea(firstTriangle.width, firstTriangle.length));
console.log(triangleArea(secondTriangle.width, secondTriangle.length));
console.log(triangleArea(thirdTriangle.width, thirdTriangle.length));

function biggest(a,b,c,){
    if(triangleArea(a.width, a.length) >= triangleArea(b.width, b.length) && triangleArea(a.width, a.length) >= triangleArea(c.width, c.length)){
        console.log("The first triangle was the biggest!")
    }
    else if (triangleArea(b.width, b.length) >= triangleArea(a.width, a.length) && triangleArea(b.width, b.length) >= triangleArea(c.width, c.length)){
        console.log("The second triangle was the biggest!")
    }
    else if (triangleArea(c.width, c.length) >= triangleArea(a.width, a.length) && triangleArea(c.width, c.length) >= triangleArea(b.width, b.length)){
        console.log("The third triangle was the biggest!")
    }
    else{
        console.log("Something went wrong");
    }

}

biggest(firstTriangle, secondTriangle, thirdTriangle);