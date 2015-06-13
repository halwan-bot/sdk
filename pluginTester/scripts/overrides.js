/**
 * Created by Daniel on 5/23/2015.
 */
logger = console;
pluginAPI.init(-1, 0, 1, 0);
pluginAPI.datastore.dataStoreUrl = 'http://ds.buildfire.com:88';

pluginAPI.datastore.onUpdate(function(updateObj){

    var widgetIFrame = document.getElementById('widget');
    if(typeof(widgetIFrame) != 'object' || widgetIFrame.tagName !='IFRAME')
        console.error('cant find widget iframe');
    else{
        var packet = new Packet(null,'datastore.triggerOnUpdated',updateObj.detail);

        pluginAPI.sendMessage( widgetIFrame.contentWindow ,packet);
    }

});
