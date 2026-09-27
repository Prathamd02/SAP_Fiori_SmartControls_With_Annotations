sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/ui/model/json/JSONModel"
], (Controller,History,JSONModel) => {
    "use strict";

    return Controller.extend("smartcontrols_with_annotations.controller.ObjectPage", {
      
    onBackPress : function(){
        const oHistory = History.getInstance().getPreviousHash();

        if(oHistory !== undefined){
            window.history.go(-1);
        }
        else {
            this.getOwnerComponent().getRouter().navTo("RouteView1");
        }
    },
      
    onInit : function(){
        this.getOwnerComponent().getRouter().getRoute("RouteView2").attachPatternMatched(this.onRouteMatched, this);
    },

    onRouteMatched : function(oEvent)
    {
        console.log("Route Matched");
        const productId = oEvent.getParameter("arguments").ID;
        const rowData = this.getOwnerComponent().getModel("jsonM").getData();

        const oDemoModel = new JSONModel();
        oDemoModel.setProperty("/details", rowData);
        this.getView().setModel(oDemoModel, "oModel");

    },

    


    });
   
});