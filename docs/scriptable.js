// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: red; icon-glyph: magic;


const dataUrl = "https://edalessio.github.io/jibTemperatureProxy/result.json";
// {"datetimeFromSensoredLife":"Last Read: Wednesday, January 24, 2024 at 1:06 PM","temp":"72°F"}


let widget = await createWidget();
Script.setWidget(widget);
widget.presentMedium();
Script.complete();

async function createWidget() {
    const widget = new ListWidget();

    const data = await new Request(dataUrl).loadJSON();

    let titleRow = widget.addText(`Date ${data.datetimeFromSensoredLife}`);
    titleRow.font = Font.boldSystemFont(15);
    titleRow.textColor = Color.white();
    widget.addSpacer(5);

    let nextRow = widget.addText(`JibTemp ${data.temp}`);
    titleRow.font = Font.boldSystemFont(15);
    titleRow.textColor = Color.white();
    widget.addSpacer(5);

    let gradient = new LinearGradient()
    
    gradient.colors = [new Color("3a8cc1"), new Color("00A9D6")];
    gradient.locations =  [0, 1];
    
    widget.backgroundGradient = gradient
    return widget;
}
