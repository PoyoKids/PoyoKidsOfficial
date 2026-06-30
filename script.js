*{
margin:0;
padding:0;
box-sizing:border-box;
}

body{
font-family:'Fredoka',sans-serif;
background:#f7fbff;
color:#333;
line-height:1.6;
}

header{
display:flex;
justify-content:space-between;
align-items:center;
padding:15px 8%;
background:white;
box-shadow:0 2px 10px rgba(0,0,0,0.1);
position:sticky;
top:0;
z-index:1000;
}

.logo{
display:flex;
align-items:center;
gap:12px;
}

.logo img{
width:70px;
height:70px;
border-radius:50%;
}

.logo h1{
color:#ff4f87;
font-size:34px;
font-weight:700;
}

nav{
display:flex;
gap:25px;
flex-wrap:wrap;
}

nav a{
text-decoration:none;
color:#444;
font-weight:600;
transition:.3s;
}

nav a:hover{
color:#ff4f87;
}

.hero{
text-align:center;
padding:100px 20px;
background:linear-gradient(135deg,#b8ecff,#e7f9ff);
}

.hero h2{
font-size:55px;
margin-bottom:20px;
color:#222;
}

.hero p{
font-size:24px;
margin-bottom:40px;
}

.youtube-btn{
display:inline-block;
padding:18px 40px;
background:#ff0000;
color:white;
text-decoration:none;
font-size:24px;
font-weight:bold;
border-radius:50px;
transition:.3s;
}

.youtube-btn:hover{
background:#cc0000;
transform:scale(1.08);
}

section{
padding:80px 10%;
text-align:center;
}

section h2{
font-size:42px;
color:#ff4f87;
margin-bottom:20px;
}

section p{
font-size:22px;
max-width:900px;
margin:auto;
}

footer{
background:#5b0aa3;
color:white;
text-align:center;
padding:35px;
font-size:22px;
margin-top:50px;
}

@media(max-width:900px){

header{
flex-direction:column;
}

nav{
justify-content:center;
margin-top:15px;
}

.hero h2{
font-size:38px;
}

.hero p{
font-size:20px;
}

.youtube-btn{
font-size:20px;
padding:15px 30px;
}

section h2{
font-size:34px;
}

section p{
font-size:18px;
}

.logo h1{
font-size:28px;
}

.logo img{
width:60px;
height:60px;
}

}
