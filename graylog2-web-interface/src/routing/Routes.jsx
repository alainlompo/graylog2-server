const Routes = {
  STARTPAGE: '/',
  SEARCH: '/search',
  STREAMS: '/streams',
  SOURCES: '/sources',
  DASHBOARDS: '/dashboards',
  GETTING_STARTED: '/gettingstarted',
  SYSTEM: {
    CONFIGURATIONS: '/system/configurations',
    CONTENTPACKS: {
      LIST: '/system/contentpacks',
      EXPORT: '/system/contentpacks/export',
    },
    GROKPATTERNS: '/system/grokpatterns',
    INDICES: {
      LIST: '/system/indices',
      FAILURES: '/system/indices/failures',
    },
    INPUTS: '/system/inputs',
    LOGGING: '/system/logging',
    METRICS: (nodeId) => `/system/metrics/node/${nodeId}`,
    NODES: {
      LIST: '/system/nodes',
      SHOW: (nodeId) => `/system/nodes/${nodeId}`,
    },
    THREADDUMP: (nodeId) => `/system/threaddump/${nodeId}`,
    OUTPUTS: '/system/outputs',
    OVERVIEW: '/system/overview',
    LDAP: {
      SETTINGS: '/system/ldap',
      GROUPS: '/system/ldap/groups',
    },
    AUTHENTICATION: {
      OVERVIEW: '/system/authentication',
      ROLES: '/system/authentication/roles',
      USERS: {
        CREATE: '/system/authentication/users/new',
        edit: (username) => `/system/authentication/users/edit/${username}`,
        LIST: '/system/authentication/users',
      },
      PROVIDERS: {
        CONFIG: '/system/authentication/config',
        provider: (index) => `/system/authentication/config/${index}`,
      },
    },
  },
  message_show: (index, messageId) => `/messages/${index}/${messageId}`,
  stream_edit: (streamId) => `/streams/${streamId}/edit`,
  stream_edit_example: (streamId, index, messageId) => `${Routes.stream_edit(streamId)}?index=${index}&message_id=${messageId}`,
  stream_outputs: (streamId) => `/streams/${streamId}/outputs`,
  stream_alerts: (streamId) => `/streams/${streamId}/alerts`,
  stream_search: (streamId) => `/streams/${streamId}/search`,
  legacy_stream_search: (streamId) => `/streams/${streamId}/messages`,

  dashboard_show: (dashboardId) => `/dashboards/${dashboardId}`,

  node: (nodeId) => `/system/nodes/${nodeId}`,

  node_inputs: (nodeId) => `${Routes.SYSTEM.INPUTS}/${nodeId}`,
  global_input_extractors: (inputId) => `/system/inputs/${inputId}/extractors`,
  local_input_extractors: (nodeId, inputId) => `/system/inputs/${nodeId}/${inputId}/extractors`,
  export_extractors: (nodeId, inputId) => `${Routes.local_input_extractors(nodeId, inputId)}/export`,
  import_extractors: (nodeId, inputId) => `${Routes.local_input_extractors(nodeId, inputId)}/import`,
  new_extractor: (nodeId, inputId) => {
    return `/system/inputs/${nodeId}/${inputId}/extractors/new`;
  },
  edit_extractor: (nodeId, inputId, extractorId) => `/system/inputs/${nodeId}/${inputId}/extractors/${extractorId}/edit`,

  edit_input_extractor: (nodeId, inputId, extractorId) => `/system/inputs/${nodeId}/${inputId}/extractors/${extractorId}/edit`,
  getting_started: (fromMenu) => `${Routes.GETTING_STARTED}?menu=${fromMenu}`,
  filtered_metrics: (nodeId, filter) => `${Routes.SYSTEM.METRICS(nodeId)}?filter=${filter}`,
};

export default Routes;
