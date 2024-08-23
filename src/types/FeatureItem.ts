import { faSpinner, type IconDefinition } from '@fortawesome/free-solid-svg-icons'

export class FeatureItem {
  implemented: boolean
  title: string
  description?: string
  icon: IconDefinition
  publishedInVersion: string
  timelineDisplaySide: TimelineDisplaySide

  constructor(
    title: string,
    publishedInVersion: string,
    timelineDisplaySide?: TimelineDisplaySide,
    implemented?: boolean,
    description?: string,
    icon?: IconDefinition
  ) {
    this.title = title
    this.publishedInVersion = publishedInVersion
    timelineDisplaySide
      ? (this.timelineDisplaySide = timelineDisplaySide)
      : (this.timelineDisplaySide = TimelineDisplaySide.start)
    implemented ? (this.implemented = implemented) : (this.implemented = false)
    description ? (this.description = description) : (this.description = undefined)
    icon ? (this.icon = icon) : (this.icon = faSpinner)
  }

  static builder(title: string, publishedInVersion: string): FeatureItemBuilder {
    return new FeatureItemBuilder(title, publishedInVersion)
  }
}

export class FeatureItemBuilder {
  private featureItem: FeatureItem

  constructor(title: string, publishedInVersion: string) {
    this.featureItem = new FeatureItem(title, publishedInVersion)
  }

  implemented(implemented: boolean): FeatureItemBuilder {
    this.featureItem.implemented = implemented
    return this
  }

  description(description: string): FeatureItemBuilder {
    this.featureItem.description = description
    return this
  }

  icon(icon: IconDefinition): FeatureItemBuilder {
    this.featureItem.icon = icon
    return this
  }

  build(): FeatureItem {
    return this.featureItem
  }
}

export enum TimelineDisplaySide {
  start = 'timeline-start',
  end = 'timeline-end'
}
