/** TWITTER STREAM **/
module.exports = async function (twitterv2) {
    
    //var track = require("../../app/lib/track.js");
    //var trackWords = track.getWords();
    console.log("V2 STREAM");
    twitterStreamv2 = await twitterv2.v2.searchStream({"tweet.fields": ["created_at", "conversation_id"]});
    //Ver Reglas Puestas
    const rules = await twitterv2.v2.streamRules();
    console.log(rules);

    //Eliminar reglas
    //const deleteRules = await client.v2.updateStreamRules({
    //  delete: {
    //    ids: ['1624074891103174656', '1624074891103174657'],
    //  },
    //});
    // Add rules
    //const addedRules = await client.v2.updateStreamRules({
    //	  add: [
    //	    { value: 'JavaScript', tag: 'js' },
    //	    { value: 'TypeScript', tag: 'ts' },
    //	  ],
    //	});
    return twitterStreamv2;
};
