function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}

let sorular = [
    new Soru("1-Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" , d: "Nuget" }, "c"),
    new Soru("2-Hangisi frontend kapsamında değerlendirilemez?", { a: "CSS", b: "HTML", c: "JavaScript", d: "SQL" }, "d"),
    new Soru("3-Hangisi backend kapsamında değerlendirilemez?", { a: "Node.js", b: "Typescript", c: "Angular", d: "React"}, "a"),
    new Soru("4-Hangisi javascript programlama dilini kullanmaz?", { a: "React", b: "Angular", c: "Vue.js", d: "ASP.Net" }, "d"),
    new Soru("5-Hangisi bir programlama dili değildir?", { a: "HTML", b: "Java", c: "C#", d: "Python" }, "a")
];
