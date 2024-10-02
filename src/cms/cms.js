import CMS from 'decap-cms-app'

import MenuGroupPreview from './preview-templates/MenuGroupPreview'
import PressPagePreview from './preview-templates/PressPagePreview'
import TeamMemberPreview from './preview-templates/TeamMemberPreview'
import FaqsPreview from './preview-templates/FaqsPreview'

CMS.registerPreviewTemplate('menu', MenuGroupPreview)
CMS.registerPreviewTemplate('press', PressPagePreview)
CMS.registerPreviewTemplate('team', TeamMemberPreview)
CMS.registerPreviewTemplate('faqs', FaqsPreview)
