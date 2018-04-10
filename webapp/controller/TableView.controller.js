sap.ui.define ([ 
"sap/ui/core/mvc/Controller",
"sap/m/MessageBox",
"./Formatter"
], function ( Controller, MessageBox, Formatter) {
	"use strict" ; 

	return Controller.extend("com.sapZSAPI5_ODATA_MANIFEST.controller.TableView", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.sapZSAPI5_ODATA_MANIFEST.view.TableView
		 */
		//	onInit: function() {
		//
		//	},
		onSelect: function(oEvent) {
			
			console.log(this.getView().byId("cb1").getSelected());
		},
		onActionPay: function() {
			var oTable = this.getView().byId("tabone");
			var length = oTable.getBinding("items").getLength();

			var aSelected = oTable.getSelectedItems();
			var aSelectedLength = aSelected.length;
			if (aSelectedLength === 0) 
			{
				MessageBox.alert("Please select any row");
			} 
			else 
			{
				 MessageBox.alert("Total Length : " + length + "<<Selected Items :" + aSelected + "<<Selected Items Length :" + aSelectedLength);
				 //console.log(aSelected[0].getBindingContext("prod").getProperty("ProductID"));
				var totalAmount = 0;
				for(var i = 0; i < aSelectedLength; i++ )
				{
					// var pid = aSelected[i].getBindingContext("prod").getProperty("ProductID");
					// MessageBox.alert("Product id : " + pid);
					totalAmount = totalAmount + parseInt(aSelected[i].getBindingContext("prod").getProperty("UnitPrice"));
				}
				MessageBox.alert("Total Amount : " + totalAmount);
			}

		},
		onPress: function() {
			if (this.getView().byId("tcb1").getSelected()) {
				MessageBox.alert("Checked");
			} else {
				MessageBox.alert("Not Checked");
			}
		},
		onSortFilter:function()
		{
			MessageBox.alert("hello");
		},
		onRowPress: function(oEvent) {
				//alert("hi");
				var id = oEvent.getSource().getBindingContext("prod").getProperty("ProductID");
				var name = oEvent.getSource().getBindingContext("prod").getProperty("ProductName");
				var categoryID = oEvent.getSource().getBindingContext("prod").getProperty("CategoryID");
				var categoryName = oEvent.getSource().getBindingContext("prod").getProperty("Category/CategoryName");
				console.log(id + " " + name + " " + categoryID + " " + categoryName);
			}
			/**
			 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
			 * (NOT before the first rendering! onInit() is used for that one!).
			 * @memberOf com.sapZSAPI5_ODATA_MANIFEST.view.TableView
			 */
			//	onBeforeRendering: function() {
			//
			//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.sapZSAPI5_ODATA_MANIFEST.view.TableView
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.sapZSAPI5_ODATA_MANIFEST.view.TableView
		 */
		//	onExit: function() {
		//
		//	}

	});

});