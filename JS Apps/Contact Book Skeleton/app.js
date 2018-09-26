$(() => {
    const data =  $.get('./data.json');
    const contactTemplate =  $.get('./templates/contacts.hbs');
    let compile = Handlebars.compile(contactTemplate);
    let final = {contacts: data};
    let res = compile(final);
    $('#list').append(res);
    console.log(contactTemplate);
});