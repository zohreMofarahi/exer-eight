class Circle {
     
     constructor (radius=11) {
     this.radius=radius;
     
     }
     getArea(radius){
          return this.radius**2 *Math.PI

     }
     
     getPerimeter(radius) {
          return this.radius*2*Math.PI
     }
}

let circy =new Circle(4.44)
console.log (circy.getPerimeter())


let circyy=new Circle(11)
console.log (circyy.getArea())