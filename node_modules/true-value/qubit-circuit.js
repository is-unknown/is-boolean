const C = {
    I: [0, 1],
    ZERO: [0, 0],
    ONE: [1, 0],
    NEG_ONE: [-1, 0],
    INV_SQRT2: [1 / Math.sqrt(2), 0],
    NEG_INV_SQRT2: [-1 / Math.sqrt(2), 0],

    add: function ([ar, ai], [br, bi]) { return [ar + br, ai + bi]; },
    sub: function ([ar, ai], [br, bi]) { return [ar - br, ai - bi]; },
    multiply: function ([ar, ai], [br, bi]) {
        return [ar * br - ai * bi, ar * bi + ar * bi];
    },
    scale: function ([r, i], s) { return [r * s, i * s]; },
    
    conjugate: function ([r, i]) { return [r, -i]; },
    magnitudeSquared: function ([r, i]) { return r * r + i * i; },
    format: function([r, i]) {
        if (Math.abs(i) < 1e-9) return `${r.toFixed(4)}`;
        if (Math.abs(r) < 1e-9) return `${i.toFixed(4)}i`;
        return `${r.toFixed(4)}${i >= 0 ? '+' : ''}${i.toFixed(4)}i`;
    }
};

const GATES = {
    X: [[C.ZERO, C.ONE], [C.ONE, C.ZERO]],
    Y: [[C.ZERO, C.scale(C.I, -1)], [C.I, C.ZERO]],
    Z: [[C.ONE, C.ZERO], [C.ZERO, C.NEG_ONE]],
    H: [[C.INV_SQRT2, C.INV_SQRT2], [C.INV_SQRT2, C.multiply(C.INV_SQRT2, C.NEG_ONE)]],
    S: [[C.ONE, C.ZERO], [C.ZERO, C.I]],
    T: [[C.ONE, C.ZERO], [C.ZERO, C.multiply(C.scale(C.ONE, Math.cos(Math.PI / 4)), C.add(C.ONE, C.scale(C.I, Math.tan(Math.PI / 4)))) ]],

    Rz: (theta) => {
        const h_t = theta / 2;
        const cos_t = [Math.cos(h_t), 0];
        const sin_t = [Math.sin(h_t), 0];
        const neg_i_sin_t = C.multiply(C.scale(C.I, -1), sin_t);
        
        return [
            [C.add(cos_t, neg_i_sin_t), C.ZERO],
            [C.ZERO, C.sub(cos_t, neg_i_sin_t)]
        ];
    }
};

class QubitCircuit {
    static get GATES() { return GATES; }

    constructor() {
        this.state = [C.ONE, C.ZERO];
        this.history = [];
    }

    apply(gate) {
        const term00 = C.multiply(gate[0][0], this.state[0]);
        const term01 = C.multiply(gate[0][1], this.state[1]);
        const newAlpha = C.add(term00, term01);

        const term10 = C.multiply(gate[1][0], this.state[0]);
        const term11 = C.multiply(gate[1][1], this.state[1]);
        const newBeta = C.add(term10, term11);

        this.state = [newAlpha, newBeta];
        this.history.push(gate);
        return this;
    }
    
    getProbabilities() {
        const p0 = C.magnitudeSquared(this.state[0]);
        const p1 = C.magnitudeSquared(this.state[1]);
        return { 0: p0, 1: p1 };
    }

    measure() {
        const p1 = C.magnitudeSquared(this.state[1]);
        const result = Math.random() < p1;
        
        if (result) {
            this.state = [C.ZERO, C.ONE];
        } else {
            this.state = [C.ONE, C.ZERO];
        }
        
        return result;
    }
    
    sample(shots = 1000) {
        const counts = { '0': 0, '1': 0 };
        const p1 = C.magnitudeSquared(this.state[1]);
        
        for (let i = 0; i < shots; i++) {
            if (Math.random() < p1) {
                counts['1']++;
            } else {
                counts['0']++;
            }
        }
        return counts;
    }
    
    toString() {
        const [alpha, beta] = this.state;
        return `${C.format(alpha)}|0> + ${C.format(beta)}|1>`;
    }
    
    x() { return this.apply(GATES.X); }
    h() { return this.apply(GATES.H); }
    z() { return this.apply(GATES.Z); }
    s() { return this.apply(GATES.S); }
    t() { return this.apply(GATES.T); }
    rz(theta) { return this.apply(GATES.Rz(theta)); }
}

module.exports = QubitCircuit;