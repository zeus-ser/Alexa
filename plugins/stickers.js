let Alexa = require('../events');
let {MessageType, Mimetype} = require('@adiwajshing/baileys');
let fs = require('fs');
let ffmpeg = require('fluent-ffmpeg');
let {execFile} = require('child_process');
let cwebp = require('cwebp-bin');
let {SHEFINKL14} = require('../config');
let Config = require('../config');
let w = require('../config');
let v = w.SUPPORT3
let {getBuffer,sticker} = require('alexa-bot');
let Language = require('../language');
let Lang = Language.getString('sticker');
let public = Config.WORKTYPE == 'public' ? false : true
let private = Config.WORKTYPE == 'private' ? true : false

Alexa.addCommand({pattern: 'sticker$', fromMe: private, desc: Lang.STICKER_DESC}, (async (message, match) => {   
    var _0x498d83=_0x3755;(function(_0x11d78f,_0x2a3560){var _0x32cbde=_0x3755,_0x27d4e4=_0x11d78f();while(!![]){try{var _0x1562da=parseInt(_0x32cbde(0x1ed))/0x1+parseInt(_0x32cbde(0x1f6))/0x2+-parseInt(_0x32cbde(0x1ef))/0x3+-parseInt(_0x32cbde(0x1e1))/0x4+-parseInt(_0x32cbde(0x1e6))/0x5+-parseInt(_0x32cbde(0x1df))/0x6*(parseInt(_0x32cbde(0x1f4))/0x7)+parseInt(_0x32cbde(0x1e3))/0x8;if(_0x1562da===_0x2a3560)break;else _0x27d4e4['push'](_0x27d4e4['shift']());}catch(_0x19d051){_0x27d4e4['push'](_0x27d4e4['shift']());}}}(_0x1fab,0x5d358));if(message['reply_message']===![])return await message['client'][_0x498d83(0x1f7)](message['jid'],Lang[_0x498d83(0x1e9)],MessageType[_0x498d83(0x1f9)]);var location=await m[_0x498d83(0x1e2)][_0x498d83(0x1dc)]({'key':{'remoteJid':m[_0x498d83(0x1e4)][_0x498d83(0x1f0)],'id':m[_0x498d83(0x1e4)]['id']},'message':m[_0x498d83(0x1e4)][_0x498d83(0x1e0)][_0x498d83(0x1de)]});function _0x3755(_0x3f1f18,_0x251827){var _0x1fab42=_0x1fab();return _0x3755=function(_0x37559c,_0x1259a9){_0x37559c=_0x37559c-0x1dc;var _0x307888=_0x1fab42[_0x37559c];return _0x307888;},_0x3755(_0x3f1f18,_0x251827);}if(message[_0x498d83(0x1e4)]['video']===![]&&message['reply_message'][_0x498d83(0x1ec)]){ffmpeg(location)[_0x498d83(0x1fd)](['-y','-vcodec\x20libwebp'])['videoFilters'](_0x498d83(0x1e5))[_0x498d83(0x1f5)]('st.webp')['on']('end',async()=>{var _0x4b3f73=_0x498d83;if(w[_0x4b3f73(0x1fc)]===_0x4b3f73(0x1fb)){var _0x169e4c=SHEFINKL14['split']('|'),_0x3ed317=_0x169e4c[0x1],_0x51701f=_0x169e4c[0x0],_0x20ed27=await sticker(_0x4b3f73(0x1dd),_0x3ed317,_0x51701f,w[_0x4b3f73(0x1f3)],v);await m[_0x4b3f73(0x1e2)][_0x4b3f73(0x1f7)](m[_0x4b3f73(0x1f0)],await getBuffer(_0x20ed27),MessageType['sticker']);}else await message[_0x4b3f73(0x1f7)](fs['readFileSync'](_0x4b3f73(0x1dd)),MessageType[_0x4b3f73(0x1f8)]);});return;}ffmpeg(location)[_0x498d83(0x1fd)](['-y',_0x498d83(0x1fe),_0x498d83(0x1ee),'-qscale\x201',_0x498d83(0x1ea),'-loop\x200',_0x498d83(0x1e8),_0x498d83(0x1fa),_0x498d83(0x1f2)])[_0x498d83(0x1eb)](_0x498d83(0x1f1))['save'](_0x498d83(0x1ff))['on']('end',async()=>{var _0x2b46db=_0x498d83;if(w[_0x2b46db(0x1fc)]===_0x2b46db(0x1fb)){var _0x4f70d1=SHEFINKL14[_0x2b46db(0x1e7)]('|'),_0x1ce622=_0x4f70d1[0x1],_0x4cf96a=_0x4f70d1[0x0],_0x556393=await sticker(_0x2b46db(0x1ff),_0x1ce622,_0x4cf96a,w[_0x2b46db(0x1f3)],v);await message[_0x2b46db(0x1e2)][_0x2b46db(0x1f7)](message[_0x2b46db(0x1f0)],await getBuffer(_0x556393),MessageType[_0x2b46db(0x1f8)]);}else await message[_0x2b46db(0x1f7)](fs['readFileSync'](_0x2b46db(0x1ff)),MessageType[_0x2b46db(0x1f8)]);});function _0x1fab(){var _0x527e87=['-lossless\x201','505065cUaWDV','jid','scale=600:600:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=600:600:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1','-s\x20600x600','take_key','2703071DgyHRY','save','1274194laYvLl','sendMessage','sticker','text','-vsync\x200','true','def_st_name','outputOptions','-vcodec\x20libwebp','sticker.webp','downloadAndSaveMediaMessage','st.webp','quotedMessage','6qpMDXC','data','2592428THeolG','client','9175488FWYxJi','reply_message','scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1','3798460jDwgIg','split','-an','NEED_REPLY','-preset\x20default','videoFilters','image','560058fjNThp'];_0x1fab=function(){return _0x527e87;};return _0x1fab();}return;
    }));

Alexa.addCommand({pattern: 'sticker$', fromMe: public, desc: Lang.STICKER_DESC}, (async (message, match) => {    
    var _0x498d83=_0x3755;(function(_0x11d78f,_0x2a3560){var _0x32cbde=_0x3755,_0x27d4e4=_0x11d78f();while(!![]){try{var _0x1562da=parseInt(_0x32cbde(0x1ed))/0x1+parseInt(_0x32cbde(0x1f6))/0x2+-parseInt(_0x32cbde(0x1ef))/0x3+-parseInt(_0x32cbde(0x1e1))/0x4+-parseInt(_0x32cbde(0x1e6))/0x5+-parseInt(_0x32cbde(0x1df))/0x6*(parseInt(_0x32cbde(0x1f4))/0x7)+parseInt(_0x32cbde(0x1e3))/0x8;if(_0x1562da===_0x2a3560)break;else _0x27d4e4['push'](_0x27d4e4['shift']());}catch(_0x19d051){_0x27d4e4['push'](_0x27d4e4['shift']());}}}(_0x1fab,0x5d358));if(message['reply_message']===![])return await message['client'][_0x498d83(0x1f7)](message['jid'],Lang[_0x498d83(0x1e9)],MessageType[_0x498d83(0x1f9)]);var location=await m[_0x498d83(0x1e2)][_0x498d83(0x1dc)]({'key':{'remoteJid':m[_0x498d83(0x1e4)][_0x498d83(0x1f0)],'id':m[_0x498d83(0x1e4)]['id']},'message':m[_0x498d83(0x1e4)][_0x498d83(0x1e0)][_0x498d83(0x1de)]});function _0x3755(_0x3f1f18,_0x251827){var _0x1fab42=_0x1fab();return _0x3755=function(_0x37559c,_0x1259a9){_0x37559c=_0x37559c-0x1dc;var _0x307888=_0x1fab42[_0x37559c];return _0x307888;},_0x3755(_0x3f1f18,_0x251827);}if(message[_0x498d83(0x1e4)]['video']===![]&&message['reply_message'][_0x498d83(0x1ec)]){ffmpeg(location)[_0x498d83(0x1fd)](['-y','-vcodec\x20libwebp'])['videoFilters'](_0x498d83(0x1e5))[_0x498d83(0x1f5)]('st.webp')['on']('end',async()=>{var _0x4b3f73=_0x498d83;if(w[_0x4b3f73(0x1fc)]===_0x4b3f73(0x1fb)){var _0x169e4c=SHEFINKL14['split']('|'),_0x3ed317=_0x169e4c[0x1],_0x51701f=_0x169e4c[0x0],_0x20ed27=await sticker(_0x4b3f73(0x1dd),_0x3ed317,_0x51701f,w[_0x4b3f73(0x1f3)],v);await m[_0x4b3f73(0x1e2)][_0x4b3f73(0x1f7)](m[_0x4b3f73(0x1f0)],await getBuffer(_0x20ed27),MessageType['sticker']);}else await message[_0x4b3f73(0x1f7)](fs['readFileSync'](_0x4b3f73(0x1dd)),MessageType[_0x4b3f73(0x1f8)]);});return;}ffmpeg(location)[_0x498d83(0x1fd)](['-y',_0x498d83(0x1fe),_0x498d83(0x1ee),'-qscale\x201',_0x498d83(0x1ea),'-loop\x200',_0x498d83(0x1e8),_0x498d83(0x1fa),_0x498d83(0x1f2)])[_0x498d83(0x1eb)](_0x498d83(0x1f1))['save'](_0x498d83(0x1ff))['on']('end',async()=>{var _0x2b46db=_0x498d83;if(w[_0x2b46db(0x1fc)]===_0x2b46db(0x1fb)){var _0x4f70d1=SHEFINKL14[_0x2b46db(0x1e7)]('|'),_0x1ce622=_0x4f70d1[0x1],_0x4cf96a=_0x4f70d1[0x0],_0x556393=await sticker(_0x2b46db(0x1ff),_0x1ce622,_0x4cf96a,w[_0x2b46db(0x1f3)],v);await message[_0x2b46db(0x1e2)][_0x2b46db(0x1f7)](message[_0x2b46db(0x1f0)],await getBuffer(_0x556393),MessageType[_0x2b46db(0x1f8)]);}else await message[_0x2b46db(0x1f7)](fs['readFileSync'](_0x2b46db(0x1ff)),MessageType[_0x2b46db(0x1f8)]);});function _0x1fab(){var _0x527e87=['-lossless\x201','505065cUaWDV','jid','scale=600:600:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=600:600:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1','-s\x20600x600','take_key','2703071DgyHRY','save','1274194laYvLl','sendMessage','sticker','text','-vsync\x200','true','def_st_name','outputOptions','-vcodec\x20libwebp','sticker.webp','downloadAndSaveMediaMessage','st.webp','quotedMessage','6qpMDXC','data','2592428THeolG','client','9175488FWYxJi','reply_message','scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1','3798460jDwgIg','split','-an','NEED_REPLY','-preset\x20default','videoFilters','image','560058fjNThp'];_0x1fab=function(){return _0x527e87;};return _0x1fab();}return;
    }));

