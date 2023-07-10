class Point{
    constructor(x, expr){
        this.x = x;
        this.y = -(EvaluateExpr(this.x, expr));
    }

    show(){        
        stroke(59, 161, 114);
        ellipse(this.x, this.y, 4, 4);
    }
}

function EvaluateExpr(x_, expr_){
    expr = new algebra.parse(expr_);
    return parseInt(expr.eval({x: x_}));
}