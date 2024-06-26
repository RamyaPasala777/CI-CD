sap.ui.define(
    [
      "./BaseController",
      "sap/m/MessageBox"
    ],
    function(BaseController, MessageBox) {
      "use strict";
  
      return BaseController.extend("com.app.studentdetailsapp.controller.Details", {
        onInit: function() {
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.attachRoutePatternMatched(this.studentdetails, this); 
        },
        studentdetails: function(oEvent ){
            const {stuid} = oEvent.getParameter("arguments");
            this.id=stuid
            // const sRouterName = oEvent.getParameter("name");
            const oForm = this.getView().byId("idobjectpagelayout");
            oForm.bindElement(`/student(${stuid})`,{
              expand:'dept'
            });
        },
        onDeleteStudent: async function(){
          const oModel = this.getView().getModel("ModelV2");
          try {
            await this.deleteData(oModel, "/student", this.id);
            this.getRouter().navTo("RouteHome");
          } catch (error) {
            MessageBox.error("Some Technical Issue");
          }
      }
      });
    }
  );