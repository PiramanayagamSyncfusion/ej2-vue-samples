<template>
  <div class="control-section e-tbar-section">
    <div class="e-sample-resize-container">
       <ejs-toolbar>
         <e-items>
            <e-item prefixIcon='e-icons e-cut' tooltipText='Cut'></e-item>
            <e-item prefixIcon='e-icons e-copy' tooltipText='Copy'></e-item>
            <e-item prefixIcon='e-icons e-paste' tooltipText='Paste'></e-item>
            <e-item type='Separator'></e-item>
            <e-item prefixIcon='e-icons e-bold' tooltipText='Bold'></e-item>
            <e-item prefixIcon='e-icons e-underline' tooltipText='Underline'></e-item>
            <e-item prefixIcon='e-icons e-italic' tooltipText='Italic'></e-item>
            <e-item prefixIcon='e-icons e-paint-bucket' tooltipText='Color-Picker'></e-item>
            <e-item type='Separator'></e-item>
            <e-item prefixIcon='e-icons e-align-left' tooltipText='Align-Left'></e-item>
            <e-item prefixIcon='e-icons e-align-right' tooltipText='Align-Right'></e-item>
            <e-item prefixIcon='e-icons e-align-center' tooltipText='Align-Center'></e-item>
            <e-item prefixIcon='e-icons e-justify' tooltipText='Align-Justify'></e-item>
            <e-item type='Separator'></e-item>
            <e-item prefixIcon='e-icons e-list-unordered' tooltipText='Bullets'></e-item>
            <e-item prefixIcon='e-icons e-list-ordered' tooltipText='Numbering'></e-item>
            <e-item type='Separator'></e-item>
            <e-item prefixIcon='e-icons e-undo' tooltipText='Undo'></e-item>
            <e-item prefixIcon='e-icons e-redo' tooltipText='Redo'></e-item>
            <e-item type='Separator'></e-item>
            <e-item prefixIcon='e-icons e-upload-1' tooltipText='Upload'></e-item>
            <e-item prefixIcon='e-icons e-download' tooltipText='Download'></e-item>
            <e-item type='Separator'></e-item>
            <e-item prefixIcon='e-icons e-increase-indent' tooltipText='Indent'></e-item>
            <e-item prefixIcon='e-icons e-decrease-indent' tooltipText='Outdent'></e-item>
            <e-item type='Separator'></e-item>
            <e-item prefixIcon='e-icons e-erase' tooltipText='Clear'></e-item>
            <e-item prefixIcon='e-icons e-refresh' tooltipText='Reload'></e-item>
            <e-item prefixIcon='e-icons e-export' tooltipText='Export'></e-item>
          </e-items>
       </ejs-toolbar>
           <div id="action-description">
    <p>This sample demonstrates the default functionalities of the <code>Toolbar</code>. Select any command or click the left/right navigation icon or touch swipe to see the hidden commands of the Toolbar.</p>
</div>

<div id="description">
    <p><strong>Toolbar</strong> is a graphical control on which commands/buttons will be displayed in horizontal order. By default scrolling display mode enabled when content exceeds the available viewing area.</p>


    <p>You can use left/right navigation icon or touch swipe to see the hidden commands of the toolbar.</p>
    <ul>
        <li>Initially toolbar rendered with the <code>left and right navigation</code> icon and you can see hidden commands by <code>moving in right or left</code> direction.</li>
        <li>When you reach <code>right/left end of toolbar</code>, corresponding navigation direction will be disabled.</li>
        <li>You can continuously scroll the toolbar content by holding on the navigation icon.</li>
        <li>In <code>devices</code> navigation icons are not available. you can touch swipe to see the hidden commands of the toolbar.</li>
    </ul>
</div>
    </div>

</div>
</template>
<style>
@media only screen and (min-width: 1224px) {
    .e-tbar-section .e-sample-resize-container {
        width: 700px;
    }
}

@media only screen and (min-width: 1824px) {
    .e-tbar-section .e-sample-resize-container {
        width: 50%;
    }
}

.e-tbar-section .e-sample-resize-container {
    margin: auto;
    height: 40px;
    max-width: 700px;
}
</style>
<script>
import Vue from "vue";
import { ToolbarPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(ToolbarPlugin);

export default Vue.extend({
  
});
</script>