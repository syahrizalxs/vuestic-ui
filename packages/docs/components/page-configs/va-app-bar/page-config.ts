import { BlockType, ApiDocsBlock } from '../../../types/configTypes'
import VaAppBar from 'vuestic-ui/src/components/vuestic-components/va-app-bar/VaAppBar.vue'
import apiOptions from './api-options'

export default [
  {
    type: BlockType.TITLE,
    translationString: 'appBar.title',
  },
  {
    type: BlockType.PARAGRAPH,
    translationString: 'appBar.summaryText',
  },
  {
    type: BlockType.SUBTITLE,
    translationString: 'all.examples',
  },
  {
    type: BlockType.HEADLINE,
    translationString: 'appBar.examples.default.title',
  },
  {
    type: BlockType.PARAGRAPH,
    translationString: 'appBar.examples.default.text',
  },
  {
    type: BlockType.EXAMPLE,
    component: 'va-app-bar/Default',
  },
  {
    type: BlockType.HEADLINE,
    translationString: 'appBar.examples.color.title',
  },
  {
    type: BlockType.PARAGRAPH,
    translationString: 'appBar.examples.color.text',
  },
  {
    type: BlockType.EXAMPLE,
    component: 'va-app-bar/Color',
  },
  {
    type: BlockType.HEADLINE,
    translationString: 'appBar.examples.bottom.title',
  },
  {
    type: BlockType.PARAGRAPH,
    translationString: 'appBar.examples.bottom.text',
  },
  {
    type: BlockType.EXAMPLE,
    component: 'va-app-bar/Bottom',
  },
  {
    type: BlockType.HEADLINE,
    translationString: 'appBar.examples.hide.title',
  },
  {
    type: BlockType.PARAGRAPH,
    translationString: 'appBar.examples.hide.text',
  },
  {
    type: BlockType.EXAMPLE,
    component: 'va-app-bar/Hide',
  },
  {
    type: BlockType.HEADLINE,
    translationString: 'appBar.examples.shadow.title',
  },
  {
    type: BlockType.PARAGRAPH,
    translationString: 'appBar.examples.shadow.text',
  },
  {
    type: BlockType.EXAMPLE,
    component: 'va-app-bar/Shadow',
  },
  {
    type: BlockType.SUBTITLE,
    translationString: 'all.api',
  },
  {
    type: BlockType.API,
    componentOptions: VaAppBar,
    apiOptions,
  },
] as ApiDocsBlock[]