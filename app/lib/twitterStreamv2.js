/** TWITTER STREAM **/
module.exports = async function (twitterv2) {
    
    //var track = require("../../app/lib/track.js");
    //var trackWords = track.getWords();
    console.log("TWITTER V2.2 STREAM");
    twitterStreamv2 = await twitterv2.v2.searchStream({
	"expansions": ["author_id","geo.place_id", "edit_history_tweet_ids","entities.mentions.username","in_reply_to_user_id","referenced_tweets.id","referenced_tweets.id.author_id"],
	"tweet.fields": ["attachments","author_id","context_annotations","conversation_id","created_at","edit_controls","entities","geo","id","in_reply_to_user_id","lang","public_metrics","possibly_sensitive","referenced_tweets","reply_settings","source","text","withheld"],
	"user.fields": ["created_at","description","entities","id","location","name","pinned_tweet_id","profile_image_url","protected","public_metrics","url","username","verified","verified_type","withheld"],
	"place.fields": ["contained_within","country","country_code","full_name","geo","id","name","place_type"]});
    
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
