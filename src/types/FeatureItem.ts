import { faCircleCheck, type IconDefinition } from '@fortawesome/free-solid-svg-icons'

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
    timelineDisplaySide: TimelineDisplaySide,
    implemented?: boolean,
    description?: string,
    icon?: IconDefinition
  ) {
    this.title = title
    this.publishedInVersion = publishedInVersion
    this.timelineDisplaySide = timelineDisplaySide
    implemented ? (this.implemented = implemented) : (this.implemented = false)
    description ? (this.description = description) : (this.description = undefined)
    icon ? (this.icon = icon) : (this.icon = faCircleCheck)
  }

  static builder(
    title: string,
    publishedInVersion: string,
    timelineDisplaySide: TimelineDisplaySide
  ): FeatureItemBuilder {
    return new FeatureItemBuilder(title, publishedInVersion, timelineDisplaySide)
  }
}

export class FeatureItemBuilder {
  private featureItem: FeatureItem

  constructor(title: string, publishedInVersion: string, timelineDisplaySide: TimelineDisplaySide) {
    this.featureItem = new FeatureItem(title, publishedInVersion, timelineDisplaySide)
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
