const baseUrl = "https://1secmail.com";

async function api(urn){
    const request = await fetch(baseUrl+urn);

    return request.json();
}

function getMails(count = 1){
    return api(`/api/v1/?action=genRandomMailbox&count=${count}`);
}

function getActiveDomains(){
    return api("/api/v1/?action=getDomainList");
}

function getMessages(login, domain){
    return api(`/api/v1/?action=getMessages&login=${login}&domain=${domain}`);
}

function getMessage(login, domain, id){
    return api(`api/v1/?action=readMessage&login=${login}&domain=${domain}&id=${id}`);
}

function getAttachment(login, domain, id, file){
    return api(`https://www.1secmail.com/api/v1/?action=download&login=${login}&domain=${domain}&id=${id}&file=${file}`);
}