/** TWITTER **/
// Twitter streaming

var TApi = require('twitter-api-v2');
/*const client1 = new TApi.TwitterApi({
  appKey: 'snSe5oSNxqgUCtdLQ6dnlL3Oz',
  appSecret: '3tBNrvpCN9kGAg6a3CjKUT9gyQygeuQTvDstYUG3oehXy2t5gO',
  accessToken: 'tecSa7qm3Su5WEEhxHTZuLNUkhtXaTvagEjOpPkU3EZ0H',
  accessSecret: 'tecSa7qm3Su5WEEhxHTZuLNUkhtXaTvagEjOpPkU3EZ0H',
});*/
var client = new TApi.TwitterApi('AAAAAAAAAAAAAAAAAAAAAJR7hQEAAAAAayZBvB05sn0GtBJ0kOpsD848f8U%3DfGDnnrI5L2HGBy4u8GyoTqOY7PGR9xbqemKxIkqsgmeR2Cq3Re');

//const stream = client.v2.searchStream({"tweet.fields": ["created_at", "conversation_id"]});

//stream.on('tweet', function (tweet) {
//	console.log(tweet)
//});

//(async () => {
//  try {
	//const stream = await client.v2.searchStream();
	//console.log(stream)
	//const stream = await client.v2.sampleStream();//getStream('tweets/sample/stream');

	// Add rules
//	const addedRules = await client.v2.updateStreamRules({
//	  add: [
//	    { value: 'JavaScript', tag: 'js' },
//	    { value: 'TypeScript', tag: 'ts' },
//	  ],
//	});
	
//	const stream = await client.v2.searchStream({"tweet.fields": ["created_at", "conversation_id"]});
	//const stream = await client.v2.getStream('tweets/search/stream');
//	const rules = await client.v2.streamRules();

	// Log every rule ID
//	console.log(rules);
//const deleteRules = await client.v2.updateStreamRules({
//  delete: {
//    ids: ['1624070612535705602', '1624070612535705603'],
//  },
//});
//	stream.on(
		// Emitted when a Twitter payload (a tweet or not, given the endpoint).
//  		TApi.ETwitterStreamEvent.Data,
//  		eventData => console.log('Twitter has sent something:', eventData),
//		);
//	stream.autoReconnect = true;
	//console.log(addedRules)
//} catch (error) {
//    console.log(error);
//  }
//})();



module.exports = client;

