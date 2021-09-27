let res={"Name":"Rijan",
"Mobile":9600722057,
"Email":"rijanfedo1998@gmail.com",
"Address":{"Door no":"157/c","Street":"North Street","Place":"Alanthalai","City":"Tiruchendur","District":"Tuticorin","Pincode":628206},
"Qualification":{"SSLC":{"Institute":"Kanchi Sri Sankara AMHSS","Year Of Passing":2014,"Marks":95},
"HSC":{"Institute":"Kanchi Sri Sankara AMHSS","Year Of Passing":2016,"Marks":"92%"},
"B.E.Mechanical Engineering":{"Institute":"National Engineering College","Year Of Passing":2020,"Marks":"7.2CGP"}},
"Father's Name":"Sahaya Linus Fernando","DOB":"26 Dec 1998","Sex":"Male","Nationality":"Indian","Marital Status":"Single","Languages Known":["Tamil","English"],
"Hobby":["Games","Music"]}
for(let a in res)
{
	console.log(a + ":" + res[a])
}