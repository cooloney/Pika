/**
 * Created by Dichel on 8/10/15.
 */
Template.loading.onRendered( function() {
    var latLng;
    latLng = Geolocation.latLng();
    return this.autorun(function() {
        latLng = Geolocation.latLng();
        if (latLng != null) {
            IonLoading.hide();
            console.log('got my location in loading page');
            console.log(latLng);
            console.log('done in loading page');
            return Session.set('keyLocation', latLng);
        } else {
            return IonLoading.show();
        }
    });
});