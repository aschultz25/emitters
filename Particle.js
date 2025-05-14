class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y)
    this.vel = p5.Vector.random2D().mult(random(1, 2))
    this.acc = createVector(0, 0)
    this.lifespan = 255
    this.color = color(random(255), random(255), random(255))
    this.size = random(3, 8)
    this.vel = createVector(random(-1.5, 1.5), random(-2, 0))
  }
  
  applyForce(force) {
    this.acc.add(force)
  }

  update() {
    this.vel.add(this.acc)
    this.pos.add(this.vel)
    this.acc.mult(0)
    this.lifespan -= 2
  }

  draw() {
    fill(this.color.levels[0], this.color.levels[1], this.color.levels[2], this.lifespan)
    ellipse(this.pos.x, this.pos.y, this.size)
  }

  isDead() {
    return this.lifespan <= 0
  }
}

class SquareParticle extends Particle {
  constructor(x, y) {
    super(x, y)
    this.size = random(5, 10)
    this.color = color(random(255), random(255), random(255))
  }

  draw() {
    fill(this.color.levels[0], this.color.levels[1], this.color.levels[2], this.lifespan)
    ellipse(this.pos.x, this.pos.y, this.size, this.size)
  }
}
