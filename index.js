module.exports = function (context, data) {
    context.log('Webhook was triggered!');

    var request = require('request');
    
    if(data) {
        var slackUrl = "<YOUR SLACK URL>";
        var text = {
            "text": "Something happened!!\n<" + data.context.portalLink + "|Check it out>"
        };
        
        var requestData = {
            url: slackUrl,
            method: "POST",
            json: true,
            headers: {
                "content-type": "application/json",
            },
            body: text
        };
        
        request(requestData);
        context.res = {
            status: 200
        };
    }
    else {
        context.res = {
            status: 400,
            body: { error: 'Please pass first/last properties in the input object'}
        };
    }

    context.done();
}
