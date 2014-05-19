app.config(['stateHelperProvider', '$urlRouterProvider',
  function(stateHelperProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    stateHelperProvider.setNestedState({
      name: 'main',
      views: {
        main: { 
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        }
      },
      children: [
        {
          name: 'profile',
          views: {
           leftMenu:{
              templateUrl: 'views/left-menu.html',
              controller: 'LeftMenuCtrl'
            },
            content: {
              templateUrl: 'views/profile.html',
              controller: 'ProfileCtrl'
            },
          }
        },
        {
          name: 'talents',
          views: {
           leftMenu:{
              templateUrl: 'views/left-menu.html',
              controller: 'LeftMenuCtrl'
            },
            content: {
              templateUrl: 'views/talents.html',
              controller: 'TalentsCtrl' 
            },
            topbar: {
              templateUrl: 'views/topbar.html',
              controller: 'TopbarCtrl'
            }
          }
        },
        {
          name: 'fight',
          views: {
           leftMenu:{
              templateUrl: 'views/left-menu.html',
              controller: 'LeftMenuCtrl'
            },
            content: {
              templateUrl: 'views/fight.html',
              controller: 'FightCtrl' 
            },
            topbar: {
              templateUrl: 'views/topbar.html',
              controller: 'TopbarCtrl'
            }
          },
          children: [
            {
              name: 'weaponDefault',
              views: {
                weaponDetail: {
                  templateUrl: 'views/weaponDefault.html',
                  controller: 'FightCtrl',
                }
              }
            },
            {
              name: 'fkDetail',
              url: '/',
              views: {
                weaponDetail: {
                  templateUrl: 'views/fkDetail.html',
                  controller: 'FkDetailCtrl',
                }
              }
            },
            {
              name: 'nkDetail',
              views: {
                activeWeapon: {
                  templateUrl: 'views/activeWeapon.html',
                  controller: 'FightCtrl',
                }
              }
            },
            {
              name: 'wlDetail',
              views: {
                activeWeapon: {
                  templateUrl: 'views/activeWeapon.html',
                  controller: 'FightCtrl',
                }
              }
            }
          ]
        }
      ]
    });
  }
]);