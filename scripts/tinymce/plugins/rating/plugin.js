
tinymce.PluginManager.add("rating", function (editor, url) {
    editor.addButton("rating", {
      text: "Rating",
      icon: false,
      onclick: function () {
        editor.windowManager.open({
          title: "Add new rating",
          url: url + "/dialog.html",
          width: 400,
          height: 100,
          buttons: [
            {
              text: "Add",
              classes: 'widget btn primary',
              onclick: function () {
                const modal = editor.windowManager.getWindows()[0];
  
                function getElementById(id) {
                  return modal.getContentWindow().document.getElementById(id);
                }
                let val = getElementById('data_id').value.trim();
                val = escape(val);
                editor.insertContent(
                  `<img src="trigger_error" onerror="buildfire.ratingSystem.inject('${val}')" style="display: none">
                    <div data-rating-id="${val}" style="text-align: center;" data-mce-style="text-align: center;">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                    </div><br>`
                );
                modal.close();
              }
            },
            {
              text: 'Cancel',
              onclick: function () {
                const modal = editor.windowManager.getWindows()[0];
                modal.close();
              }
            },
          ]
        });
      }
    });
  
    return {
      getMetadata: function () {
        return {
          name: "Rating Plugin",
          // url: ""
        };
      },
    };
  });
  