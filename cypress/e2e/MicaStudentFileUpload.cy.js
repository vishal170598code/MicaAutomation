import StudentUpload from "../PageObjects/MicaStudentFileUpload";
import "cypress-file-upload";

describe("testStudentMasterBulkUpload", () => {
  before(() => {
    cy.visit("/");
  });

  beforeEach(() => {
    cy.Login("admin@emergingfive.com", "admin");
    cy.MasterDropdownHoverAndClick(("#student_master"));
  });

  it("StudentBulkUpload", () => {
      const SBLKU = new StudentUpload;
      
      SBLKU.clickStudentBulkUploadButton();
      SBLKU.clickOnBatchDropdown();
      SBLKU.select2325BatchOption();
      SBLKU.clickFileUploadInputField("Studentmasterbulk.xlsx")
      SBLKU.clickUploadButton()
      SBLKU.clickFinalSubmitButton()
      SBLKU.SuccessMessage()
  });

  it("DeleteBatchStudent", () => {
    const SBLKU = new StudentUpload;
    
    SBLKU.deleteStudentBatchName()
    SBLKU.deletedBatchName()
    SBLKU.clickConfirmDeleteButton()
    SBLKU.deleteSuccessMessage()
  });

  it.only("DownloadTemlate", () => {
    const SBLKU = new StudentUpload;
    
    SBLKU.clickStudentBulkUploadButton();
    SBLKU.downloadTempalte()
  });

  it("DownloadExcel", () => {
    const SBLKU = new StudentUpload;
    
    SBLKU.downloadExcel()
  });

  it("DeleteSingleStudent", () => {
    const SBLKU = new StudentUpload;
    
    SBLKU.clickStudentBulkUploadButton();
    SBLKU.clickOnBatchDropdown();
    SBLKU.select2325BatchOption();
    SBLKU.clickFileUploadInputField("Studentmasterbulk.xlsx")
    SBLKU.clickUploadButton()
    SBLKU.getDeletedStudentName()
    SBLKU.clickDeleteButton()
    SBLKU.clickDeleteButtonOnPermission()
    cy.wait(2000)
    SBLKU.getLengthNumberOfStudent()
  });
});
