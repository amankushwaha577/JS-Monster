class RailwayForm {
  submit() {
    alert(this.name + ": Your form is submitted for train number: " + this.trainno)
  }
  cancel() {
    alert(this.name + ": This form is cancelled for train number: " + this.trainno)
  }
  fill(givenname, trainno) {
    this.name = givenname
    this.trainno = trainno
  }
}

// Create a form for Aman
let AmanForm = new RailwayForm()
// Fill the form with Aman's details
AmanForm.fill("Aman", 145316)

// Create a forms for Rohan
let rohanForm1 = new RailwayForm()
let rohanForm2 = new RailwayForm()
// Fill the forms with Rohan's details
rohanForm1.fill("Rohan", 222420)
rohanForm2.fill("Rohan", 2229211)

AmanForm.submit()
rohanForm1.submit()
rohanForm2.submit()
rohanForm1.cancel()