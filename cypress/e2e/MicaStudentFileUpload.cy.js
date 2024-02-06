import StudentUpload from "../PageObjects/MicaStudentFileUpload";
import "cypress-file-upload";

describe("testStudentMasterBulkUpload", () => {
  before(() => {
    cy.visit("/");
  });

  beforeEach(() => {
    cy.Login("admin@emergingfive.com", "admin");
  });

  it("StudentBulkUpload", () => {
      const SBLKU = new StudentUpload;
      
      SBLKU.hoverOnMasterDROP();
      SBLKU.clickStudentMasterOption();
      SBLKU.clickStudentBulkUploadButton();
      SBLKU.clickOnBatchDropdown();
      SBLKU.select2325BatchOption();
      SBLKU.clickFileUploadInputField("Studentmasterbulk.xlsx")
      SBLKU.clickUploadButton()
      SBLKU.clickFinalSubmitButton()
      SBLKU.SuccessMessage()
  });

  it.only("DeleteBatchStudent", () => {
    const SBLKU = new StudentUpload;
    
    SBLKU.hoverOnMasterDROP();
    SBLKU.clickStudentMasterOption();
    SBLKU.deleteStudentBatchName()
    SBLKU.deletedBatchName()
    SBLKU.clickConfirmDeleteButton()
    SBLKU.deleteSuccessMessage()
  });

});
