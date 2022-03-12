import { Main } from "@k8slens/extensions";

// for demos of Lens' api, you only need LensMainExtension for
// a minimum 'main' extension
// import { Store, Util } from "@k8slens/extensions";

/**
 * LensMainExtension is the interface to Lens' main process
 * 
 * LensMainExtension api allows you to access, configure, and customize Lens data add
 * custom application menu items, and generally run custom code in Lens'
 * main process.
 * 
 * See more details: <https://docs.k8slens.dev/master/extensions/capabilities/common-capabilities/#main-extension>
 * LensMainExtension API doc <https://docs.k8slens.dev/master/extensions/api/classes/lensmainextension/>
 * 
 * MainExtension which extends LensMainExtension runs in Lens' 'main' process (NOT 'renderer' process)
 * main vs renderer <https://www.electronjs.org/docs/tutorial/quick-start#main-and-renderer-processes>
 * !! Note that the console statements in MainExtension is NOT visible in the 
 * !! DevTools console in Lens
 * To see console statements, start the Lens app from a Terminal on Mac OSX:
 * `/Applications/Lens.app/Contents/MacOS/Lens`
 * 
 * On Linux, you can access the Main process logs using the Lens PID. First get the PID
 * `ps aux | grep Lens | grep -v grep`
 * 
 * And get the log
 * `tail -f /proc/[pid]/fd/1 # stdout (console.log)`
 * `tail -f /proc/[pid]/fd/2 # stderr (console.error)`
 * 
 * TODO: Add instruction on how-to to see main process logs on Windows
 * @export
 * @class MainExtension
 * @extends {Main}
 */
export default class MainExtension extends Main.LensExtension {
  // Private instance fields used in onActivate/onDeactivate
  #timer: ReturnType<typeof setInterval>
    
  /**
     * onActivate is called when your extension has been successfully enabled.
     * You can add your custom logic here, code inside onActivate block will be called 
     * when your extension is enabled. (typically from the Lens Extensions Page)
     * @memberof MainExtension
     */
  onActivate() {
    console.log("activated");
  }

  onDeactivate() {
    console.log("deactivated");
  }
    /**
     * appMenus is the only UI feature customizable in the main extension API.
     * Custom menu items can be inserted and linked to custom functionality, 
     * such as navigating to a specific page. The following example demonstrates 
     * adding a menu item to the Help menu.
     * 
     * <https://docs.k8slens.dev/master/extensions/api/classes/lensmainextension/#appmenus>
     * @memberof MainExtension
     */
    appMenus = [
      {
        // parentId is the id of the menu to put this menu item under
        parentId: "help",
        // label is the visible text label of the menu item
        // !! Note that reload the Lens windows (CMD+R/Ctrl+R) doesn't reload the 'main' process
        // !! to see the changes you made to "label", you need to restart Lens
        label: "Sample",
        click(): void {
          console.log("clicked menu item");
          // this.navigate() will navigate to this extension
          // more parameters see our API doc
          // <https://docs.k8slens.dev/master/extensions/api/classes/lensmainextension/?h=+navigate#navigate>
          this.navigate();
          // You can also use Util.openExternal to open an external webpage
          // Util.openExternal("https://github.com/lensapp/lens")
          // 
          // See what else you can do with Util in our API doc
          // <https://docs.k8slens.dev/master/extensions/api/modules/_core_api_utils_/>
        }
      }
    ]
}
